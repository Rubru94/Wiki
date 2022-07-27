# Docker
<p align="center">
    <img src="../../.vuepress/public/docker.png">
</p>

## Introducción

**Docker** es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos.

Docker utiliza características de aislamiento de recursos del kernel Linux, tales como cgroups y espacios de nombres (namespaces) para permitir que 'contenedores' independientes se ejecuten dentro de una sola instancia de Linux, evitando la sobrecarga de iniciar y mantener máquinas virtuales.

## [Instalación Ubuntu](https://docs.docker.com/engine/install/ubuntu/#installation-methods)

### Configurar repositorio

1. Actualiza `apt` e instala los siguientes paquetes:

```bash
sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

2. Añade la clave GPG oficial de Docker:

```bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

3. Utiliza el siguiente comando para configurar el repositorio:

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### Instalar Docker engine

1. Actualiza `apt` e instala la versión más reciente de Docker Engine, containerd, y Docker Compose:

```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

2. Verifica que se ha instalado correctamente, corriendo la imagen **hello-world** o revisando la versión:

```bash
sudo docker run hello-world
```

```bash
sudo docker --version
```