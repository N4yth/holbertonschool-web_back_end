#!/usr/bin/env python3

"""
module with a 1 function
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """
    the function return the first index and last index of the page
    depend on the size of the page
    """
    result: Tuple = ((page - 1) * page_size, page * page_size)
    return result
