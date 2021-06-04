FROM python:3.6

COPY ./requirements.txt ./app/

WORKDIR /app/

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN python -m pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

#RUN python manage.py makemigrations
#RUN python manage.py migrate

# CMD ["python ./manage.py ", "runserver"]
