#!/usr/bin/env python3
from typing import List

"""
This module provides a utility function for summing
the elements of a list of floats.
"""


def sum_list(input_list: List[float]) -> float:
    """
    Calculate the sum of all elements in a list of floats.

    Args:
        input_list (List[float]): A list of float values.

    Returns:
        float: The sum of all values in the input list.
    """
    result: float = 0
    for i in range(len(input_list)):
        result += input_list[i]
    return (result)
