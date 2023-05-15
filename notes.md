# Greenfield

https://dcellar.io/buckets

## Create bucket

```zsh
./gnfd-cmd -c ./config.toml make-bucket --visibility=public-read  gnfd://fun
```

> create bucket fun succ, txn hash: 9E8829E0381126CFB46A04866BFA9A217493996307A7B7628BEADE0FBAF5CCD0

## Create Group

```zsh
./gnfd-cmd -c ./config.toml make-group gnfd://fungroup
```

> create group: fungroup succ, txn hash:B4D584042CE19D75527CA2C20FAE0C24799C2BB5990B6FDC2C17C24D952FD860, group id: 146

```zsh
export GroupId=146
```

## Create Object

Execute Head Object once before putObject to ensure that the txn has executed successfully on the chain

```zsh
./gnfd-cmd -c ./config.toml head-obj gnfd://fun2/story.txt
```

```zsh
./gnfd-cmd -c ./config.toml put --contentType "text/xml" --visibility private story.txt gnfd://fun/story.txt
```

## Cancel Upload

```zsh
./gnfd-cmd -c ./config.toml cancel-create-obj gnfd://fun/story.txt
```

> cancel create object: story.txt

## Put Obect Policy

Binds the group fungroup to the object story.txt

```zsh
./gnfd-cmd -c ./config.toml put-obj-policy --groupId ${GroupId} --actions get  gnfd://fun/story.txt
```

> put object policy fun succ, txn hash: 36D0B7C6C93CFEE8AE19FE61FD10D2EBE73EF52307EB6C45BFE6E5AF43013E45
> policy info of the group:
> id:"263" principal:<type:PRINCIPAL_TYPE_GNFD_GROUP value:"146" > resource_type:RESOURCE_TYPE_OBJECT resource_id:"62752" statements:<effect:EFFECT_ALLOW actions:ACTION_GET_OBJECT >

## Mirror

Mirror the group to BSC network.

```zsh
./gnfd-cmd -c ./config.toml mirror --resource group --id ${GroupId}
```

> mirror group with id 146 succ, txHash: A185C6010BD117E1B5B93D9A346990D495803ADCD226017DE4261116CE6EBB68

## Check account 2 access permission

Change the PrivateKey of config.toml to accountB, and try to access the file through accountB.

```zsh
./gnfd-cmd -c ./config.toml head-member --groupOwner ${accountA} --headMember ${accountB} gnfd://fungroup
```

> the user does not exist in the group

## Step 8

https://greenfield.bnbchain.org/docs/guide/dapp/quick-start.html#steps

- [Deployment tools of BC-BSC](https://github.com/bnb-chain/node-deploy)

```zsh
git submodule add https://github.com/bnb-chain/node-deploy.git
```

```zsh
git submodule update --init --recursive
```

```zsh
git submodule add https://github.com/bnb-chain/bsc.git
cd bsc && make geth
go build -o ./build/bin/bootnode ./cmd/bootnode

cp ./build/bin/geth ../node-deploy/bin/geth
cp ./build/bin/bootnode ../node-deploy/bin/bootnode

git submodule add https://github.com/bnb-chain/node.git
cd node && make build
cp ./build/bnbcli ../node-deploy/bin/bnbcli
cp ./build/bnbchaind ../node-deploy/bin/bnbchaind
```

```zsh
make tool
```

```zsh
minikube start
```
