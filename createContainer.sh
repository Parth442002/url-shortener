echo "Running Docker Build Script"

docker images -a | grep 'parth404/shortner:1.0' | awk '{print $3}' | xargs docker rmi -f
docker build --platform linux/amd64 --tag parth404/shortner:1.0 .
docker push parth404/shortner:1.0
echo "Process Completed-->"