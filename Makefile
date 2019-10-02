APP_NAME = astrohot/app

### Docker Tasks ###
build: # Build the container
	docker build -t $(APP_NAME) .

run: # Run the container using default port
	docker container run -p 3000:3000 $(APP_NAME)

up: build run # Build and run the container
