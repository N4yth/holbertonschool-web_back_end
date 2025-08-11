#!/usr/bin/env python3
"""
module with 1 function
"""

from pymongo import MongoClient


def list_all(mongo_collection):
    """
    function that list all document
    """
    return mongo_collection.find({})
