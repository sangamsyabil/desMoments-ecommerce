FROM python:3.8-alpine
LABEL maintainer="sangamsyabil@gmail.com"

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

RUN mkdir /code
WORKDIR /code
COPY . /code

RUN adduser -D user
USER user
