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

# Retirar todos os valores ausentes
data = data.dropna()

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
X = data.drop('redCards', axis=1)

# Variavel redCards entre 0 e 1
c = data['redCards']
Y = c/c.max()
reg = sm.Logit(Y, X).fit()

print(reg.summary())