# OpsWork

### Terminology

| Term  | Description |
| ----- | ------------| 
| Stack | A stack is a set of AWS resources that are managed together.Eg: Amazon EC2 instances, Amazon EBS volumes, and ELB's. |
| Layer | represents a stack component |
| Instances |handle tasks such as installing and configuring packages and deploying apps|
| Apps |code that you want to run on an application server.|
| Cookbooks and Recipes |handle tasks such as installing and configuring packages and deploying apps|
| Meta Data | --|


**Lifecycle Events**

* setup
    - Sent when instance boots
    - Include deploy event
    - Use for initial installation of software & services
* configure
    - Sent to all instances When any instance enters or leaves online state
    - Use for making sure configuration is up-to-date
* deploy
    - Sent when you deploy via UI/API; part of each setup
    - Use for custom deployment
* undeploy
    - Sent via UI/API when apps are deleted
    - Use to remove apps from running instances
* shutdown
    - Sent when instance is shut down
    - Configurable timeout
    - Use for Clean shutdown
    
### Chef
  It is an open-source framework that automates software deployment and configuration

### References

- https://github.com/awslabs/opsworks-windows-demo-nodejs