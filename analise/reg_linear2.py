#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
@author: iago
Time: 8
Não faz expansão dos dados
"""

import scipy as sp
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.formula.api as sm

# Importar dados
data = pd.read_csv('CrowdstormingDataJuly1st.csv')
data = data[['club', 'leagueCountry', 'birthday', 'height', 'weight',
             'position', 'games', 'redCards', 'rater1', 'rater2', 'refNum',
             'meanExp', 'meanIAT', 'victories']]

# Retirar valores ausentes
data = data.dropna()

# Média para tom de pele
data['RateAve'] = (data['rater1']+data['rater2'])/2

# Idade
age = pd.to_datetime(data['birthday'])
data['age'] = 2013 - age.dt.year

# Variaveis ao quadrado
data['age2'] = data['age']**2
data['weight2'] = data['weight']**2
data['height2'] = data['height']**2

# Variáveis dummy para 'posição' e 'país da liga'
position = pd.get_dummies(data['position'])
data = pd.concat([data, position], axis=1)

leagueCountry = pd.get_dummies(data['leagueCountry'])
data = pd.concat([data, leagueCountry], axis=1)

# Regressão
#X = data[['RateAve']]
#X = data[['RateAve', 'age', 'age2', 'weight', 'weight2', 'height', 'height2']]
          
X = data[['RateAve', 'Germany', 'England', 'France', 'Spain', 'Attacking Midfielder',
          'Center Back', 'Center Forward', 'Center Midfielder', 'Defensive Midfielder', 'Goalkeeper',
          'Left Fullback', 'Left Midfielder', 'Left Winger', 'Right Fullback',
          'Right Midfielder', 'Right Winger', 'age', 'age2', 'weight', 'weight2', 'height', 'height2']]
          
Y = data['redCards']

reg = sm.OLS(Y, X).fit()

#Tabela em latex
tabela = reg.summary().as_latex()
arq = open('resultado1', 'w')
arq.write(tabela)
arq.close()


print(reg.summary())
