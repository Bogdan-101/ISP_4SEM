FROM python:3.8-slim
COPY hello.py /tmp/
ENTRYPOINT ["python", "/tmp/hello.py"]
