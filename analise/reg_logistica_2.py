#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
@author: iago
Time: 31
"""

import scipy as sp
import pandas as pd
from sklearn.linear_model import LogisticRegressionCV


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

# Dividir dataset
X = data.drop('redCards', axis=1)
Y = data['redCards']


# Regressão usando penalidade l1
lr1 = LogisticRegressionCV(cv=6, penalty='l1', solver='liblinear').fit(X, Y)

coef = pd.DataFrame(lr1.coef_, X.columns, columns=['Coefficients'])
print('Coeficientes usando l1')
print(coef)


# Regressão usando penalidade l2
lr2 = LogisticRegressionCV(cv=6, penalty='l2', solver='liblinear').fit(X, Y)

coef = pd.DataFrame(lr2.coef_, X.columns, columns=['Coefficients'])
print('Coeficientes usando l2')
print(coef)
