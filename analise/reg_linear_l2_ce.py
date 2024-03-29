#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
@author: iago
Time: 1
Faz expansão dos dados
"""

import scipy as sp
import pandas as pd
from sklearn.linear_model import RidgeCV

# Importar dados
data = pd.read_csv('CrowdstormingDataJuly1st.csv')
data = data[['club', 'leagueCountry', 'birthday', 'height', 'weight',
             'position', 'games', 'redCards', 'rater1', 'rater2', 'refNum']]
data['cartoesVermelhos'] = 0

# Retirar valores ausentes
data = data.dropna()

# Expandir dataframe
d = []
for i in data.itertuples():
    n = i.games - i.redCards

    # Adiciona jogos com cartões vermelhos
    for j in range(0, i.redCards):
        data.at[i.Index, 'cartoesVermelhos'] = 1
        d.append(data.loc[i.Index])

    # Adiciona jogos sem cartões vermelhos
    for k in range(0, n):
        data.at[i.Index, 'cartoesVermelhos'] = 0
        d.append(data.loc[i.Index])


df = pd.DataFrame(data=d)

# Variáveis dummy para 'posição' e 'país da liga'
position = pd.get_dummies(df['position'])
df = pd.concat([df, position], axis=1)

leagueCountry = pd.get_dummies(df['leagueCountry'])
df = pd.concat([df, leagueCountry], axis=1)

# Média para tom de pele
df['RateAve'] = (df['rater1']+df['rater2'])/2

# Idade
age = pd.to_datetime(df['birthday'])
df['age'] = 2013 - age.dt.year

# Variaveis ao quadrado
df['age2'] = df['age']**2
df['weight2'] = df['weight']**2
df['height2'] = df['height']**2

#l2 - 'ridge'
# Regressão 1 - somente tom de pele
X = df[['RateAve']]
Y = df['cartoesVermelhos']

lr = RidgeCV(alphas=[0.1, 1.0, 10.0], cv=6)
lr.fit(X, Y)
coef = pd.DataFrame(lr.coef_, X.columns, columns=['Coefficients'])
print('Coeficientes usando l2')
print(coef)

# Regressão 2 - tom de pele, idade, idade², peso, peso², altura, altura²
X = df[['height2', 'height', 'weight2', 'weight', 'age2', 'age', 'RateAve']]
Y = df['cartoesVermelhos']

lr = RidgeCV(alphas=[0.1, 1.0, 10.0], cv=6)
lr.fit(X, Y)

coef = pd.DataFrame(lr.coef_, X.columns, columns=['Coefficients'])
print('Coeficientes usando l2')
print(coef)


# # Regressão 3 - incluir liga e posicao
X = df[['height2', 'height', 'weight2', 'weight',
        'age2', 'age', 'RateAve', 'Germany', 'England', 'France', 'Spain', 'Attacking Midfielder',
        'Center Back', 'Center Forward', 'Center Midfielder', 'Defensive Midfielder', 'Goalkeeper',
        'Left Fullback', 'Left Midfielder', 'Left Winger', 'Right Fullback',
        'Right Midfielder', 'Right Winger']]
Y = df['cartoesVermelhos']

lr = RidgeCV(alphas=[0.1, 1.0, 10.0], cv=6)
lr.fit(X, Y)

coef = pd.DataFrame(lr.coef_, X.columns, columns=['Coefficients'])
print('Coeficientes usando l2')
print(coef)
