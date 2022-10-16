#!/home/eauvmjdj/.pyenv/versions/anaconda3-2022.05/bin/python
from wsgiref.handlers import CGIHandler
from index import app
CGIHandler().run(app)
