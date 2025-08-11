#!/usr/bin/env python3
"""
module with 1 function
"""


def update_topics(mongo_collection, name, topics):
    """
    function that list all document
    """
    myquery = {"name": name}
    newvalues = {"$set": {"topics": topics}}

    mongo_collection.update_many(myquery, newvalues)
