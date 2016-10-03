## What is Docker?
Docker describes themselves as "an open platform for developers and sysadmins to build, ship, and run distributed applications" docker.com/whatisdocker/.

Docker allows you to run **containers**.  A container is a sandboxed process running an application and its dependencies on the host operating system. The application inside the container considers itself to be the only process running on the machine while the machine can run multiple containers independently. As they're sandboxed, you avoid the possibility of conflicts between dependencies and simplify deployment as all installation and configuration are done ahead of time.

Docker has three key components.

1. First is the Docker Engine, which provides a way to start containers on multiple different operating system platforms.
2. Second is the Docker client, which allows you to communicate with the Engine.
3. Third is the public Docker Registry that hosts Docker Images. These images can be launched or extended to match your own requirements and application deployment.


# Step 1 - Running A Container
With Docker, all containers are started based on a Docker Image. These images contain everything required to start the process; the host doesn't require any configuration or dependencies.

To start a container, you can either build your own Docker image or, as in this scenario, use an existing image created by Docker and the community. Existing images can be found at registry.hub.docker.com/ or by using the command `docker search <image-name>`. For example, to find an image for Redis, an object-relational database system, you would use `docker search -s 1 redis`.

After identifying the image name using search, you can launch it using `docker run <options> <image-name>`. By default, Docker will run a command in the foreground. To run in the background, you need to specify the option -d.

At this stage, you will not have a local copy of the image, so it will be downloaded from the Docker registry. If you launch a second container, the local image will be used.

### Protip
All containers are given a name and id for use in other Docker commands. You can set the friendly name by providing the option --name when launching a container such as --name redis

# Step 2 - Listing Running Containers
While the launched container is running in the background, the `docker ps command` lists all running containers, the image used to start the container and uptime.

This command also displays the friendly name and ID that can be used to find out information about individual containers.

The command docker inspect <friendly-name|container-id> provides more details about a running container, such as IP address, volumes mounted and their locations and its current execution state.

The command docker logs <friendly-name|container-id> will display messages the container has written to standard error or standard out.


# Building Container Images
All Docker images start from a base image. These base images are used as the foundation for your additional changes to run your app. For example, we may require NGINX to be configured and running on the system before we can deploy some static HTML files. As such, we want to use NGINX as our base image.

#### Dockerfiles
`Dockerfile's` are simple text files with a command on each line. TO define a base command we use the command `FROM`.

## Creating a Dockerfile
1. Create a file named `Dockerfile` (no extension needed)

```
FROM nginx:1.9
```

## Running commands
With the base image defined, we need to run various commands to configure our image. There are many commands to help with this, the main two commands are `COPY` and `RUN`.

`RUN` allows you to execute any command as you would at a command prompt, for example installing different application packages or running a build command. The results of the RUN are persisted to the image so it's important not to leave any unnecessary or temporary files on the disk as these will be included in the image.

`COPY` allows you to copy files from the directory containing the Dockerfile to the container's image. This is **extremely useful** for source code and assets that you want deployed inside your container.

```
# Define base image
FROM nginx:1.9

COPY index.html /usr/share/nginx/html/index.html
```
#### Default Commands
The `CMD` line in a Dockerfile defines the default command to run when a container is launched. If the command requires arguments then you need to use an array, for example ["cmd", "-a", "arga value", "-b", "argb-value"], which will be combined together and the command `cmd -a arga value -b argb-value` would be run.