#!/usr/bin/env python3
from typing import List
"""
module with 1 function with 1 import to use
List instead of list type
"""


def sum_list(input_list: List[float]) -> float:
    """
    function to count the sum of all variable of an list
    return an float that is the result
    """
    result: float = 0
    for i in range(len(input_list)):
        result += input_list[i]
    return (result)
