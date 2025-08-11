#!/usr/bin/env python3
"""
module with 1 function
"""

from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """
    function that list all document
    """
    result = {}
    for keys, value in kwargs.items():
        result[keys] = value
    val = mongo_collection.insert_one(result)
    return val.inserted_id
