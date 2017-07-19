## Meetup Notes

http://itsnull.com/presentations/acs/#/

### Azure Container Service
* Docker
* Kubernetes
* Azure


## Containers
* Everything required to run custom software is package into isolated container
* Unlike VM, does NOT include OS, only libraries required by custom software
* Efficient, light-weight, self-contained, versionable (snapshot of application)
* Self-contained: should be the same experience everywhere

## Kubernetes High Level
* Containers run inside Pods. Pods run on Nodes
![](http://itsnull.com/presentations/acs/images/KubernetesDiagram.png)
* Provides scaling, self-healing, etc.
* Rolling Updates