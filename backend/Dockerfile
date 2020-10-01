FROM python:3.8-alpine
LABEL maintainer="sangamsyabil@gmail.com"

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /code/
RUN mkdir /code
WORKDIR /code

RUN pip install -r requirements.txt
COPY . /code/

RUN adduser -D user
USER user