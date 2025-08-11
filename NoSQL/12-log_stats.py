#!/usr/bin/env python3
"""
module that print stats of Nginx logs
"""
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx

    all_logs = collection.count_documents({})
    print("{} logs".format(all_logs))
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, count))
    status_count = collection.count_documents({
        "method": "GET", "path": "/status"})
    print("{} status check".format(status_count))
