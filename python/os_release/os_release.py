#!/usr/bin/python

from configobj import ConfigObj



config = ConfigObj('/etc/os-release')





def id():   # return os-release id

    result = config.get("ID")

    return result



def name():   # return os-release id

    result = config.get("NAME")

    return result



def version():   # return os-release id

    result = config.get("VERSION")

    return result



def pretty_name():   # return os-release id

    result = config.get("PRETTY_NAME")

    return result



def version_id():   # return os-release id

    result = config.get("VERSION_ID")

    return result



def version():   # return os-release id

    result = config.get("VERSION")

    return result



def build_id():   # return os-release id

    result = config.get("BUILD_ID")

    return result


