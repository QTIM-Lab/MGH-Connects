# MGH-Connects
App to hep those within MGH\Partners connect with each other.


# Requirements

-   [Python](https://www.python.org/) 3.7+
-   [pip](https://pip.pypa.io/en/stable/)

You will also need a development environment capable of compiling
Python packages and the "libffi" and "libxmlsec1" development
libraries, which are needed by PySAML2.

## Mac OS X

```shell
$ brew install libffi libxmlsec1
```

## RHEL

```shell
$ sudo yum install libffi-devel xmlsec1 xmlsec1-openssl
```

## Ubuntu

```shell
$ sudo apt-get install libffi-devel xmlsec1 xmlsec1-openssl
```

# Installation

```shell
$ python3.7 -m venv ./venv
$ source venv/bin/activate
$ pip install -r requirements.txt 
```

# Running

Set environment variable FLASK_APP to mgh-connects.py

```bash
$ export FLASK_APP=mgh-connects.py
```

Then run with:

```bash
$ flask run
```