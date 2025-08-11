#!/usr/bin/env python3
"""
module with 1 function
"""


def schools_by_topic(mongo_collection, topic):
    """
    function that list all document
    """

    return mongo_collection.find({"topics": topic})
