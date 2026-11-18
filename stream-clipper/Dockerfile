FROM python:3.12-slim

RUN apt-get update \
 && apt-get install -y --no-install-recommends ffmpeg fonts-dejavu-core fontconfig \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY clipper ./clipper

# модель whisper кэшируется в томе, чтобы не качать при каждом запуске
ENV HF_HOME=/app/data/hf-cache PYTHONUNBUFFERED=1
ENTRYPOINT ["python", "-m", "clipper"]
CMD ["run"]
