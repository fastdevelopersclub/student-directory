FROM python:3.9-slim

RUN adduser --disabled-password --gecos '' appuser

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 6001

RUN chown -R appuser:appuser /app

USER appuser

CMD ["python", "db_API.py"]
