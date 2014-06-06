# I don't want to hose feedly's servers, so don't run this script too much.

import urllib2
import json

interests = [
    'gaming',
    'architecture',
    'design',
    'politics',
    'art',
    'painting',
    'technology',
    'writing',
    'books',
    'engineering',
    'science',
    'economics',
    'history',
    'diy',
    'cooking',
    'movies',
    'television',
    'philosophy',
    'psychology',
    'sports',
    'programming'
]

all_interests = {}

for i, interest in enumerate(interests):
    print('Retreiving {}, ({} / {})'.format(interest, i + 1, len(interests)))

    url = 'http://feedly.com/v3/search/feeds?q='+interest+'&n=10000'
    response = urllib2.urlopen(url)
    results = json.load(response)['results']

    all_interests[interest] = []

    for result in results:
        if 'website' in result:
            all_interests[interest].append(result['website'])


by_url = {}

for interest in all_interests:
    urls = all_interests[interest]
    for url in urls:
        if url not in by_url:
            by_url[url] = []

        by_url[url].append(interest)

with open('sites.json', 'w') as output:
    output.write(json.dumps(by_url))


