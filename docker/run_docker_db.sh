#!/bin/sh
# Check if Docker is installed
if ! command -v docker >/dev/null 2>&1; then
  echo "❌ Docker is not installed. Please install Docker first."
  exit 1
fi

# Check if Docker daemon is running
if ! docker info >/dev/null 2>&1; then
  echo "❌ Docker daemon is not running."
  echo "👉 On Linux, start it with: sudo systemctl start docker"
  echo "👉 On macOS/Windows, open Docker Desktop"
  exit 1
fi

# Builds absolute paths
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ENV_FILE="$SCRIPT_DIR/../.env"
DOCKER_COMPOSE_FILE="$SCRIPT_DIR/docker-compose.yml"

echo "🚀 Starting Docker containers..."
# Start the Docker containers using docker-compose
docker-compose --env-file "$ENV_FILE" -f "$DOCKER_COMPOSE_FILE" up -d