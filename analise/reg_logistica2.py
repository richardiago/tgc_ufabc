#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
@author: iago
Time: 31
"""

import scipy as sp
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.formula.api as sm


# Importar dados
df = pd.read_csv('CrowdstormingDataJuly1st.csv')
data = df[['club', 'leagueCountry', 'height', 'weight',
           'position', 'redCards', 'games', 'rater1', 'rater2']]
data['cartoesVermelhos'] = 0

# Retirar todos os valores ausentes
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


data = pd.DataFrame(data=d)

# Média para tom de pele
data['RateAve'] = (data['rater1']+data['rater2'])/2
data = data.drop(['rater1', 'rater2'], axis=1)

# Variáveis dummy para 'posição', 'país da liga' e 'time'
position = pd.get_dummies(data['position'])
data = pd.concat([data, position], axis=1)

leagueCountry = pd.get_dummies(data['leagueCountry'])
data = pd.concat([data, leagueCountry], axis=1)

club = pd.get_dummies(data['club'])
data = pd.concat([data, club], axis=1)

data = data.drop(['position', 'leagueCountry', 'club'], axis=1)

# Regressão
X = data.drop(['redCards', 'cartoesVermelhos'], axis=1)
Y = data['cartoesVermelhos']

reg = sm.Logit(Y, X).fit()
print(reg.summary())
