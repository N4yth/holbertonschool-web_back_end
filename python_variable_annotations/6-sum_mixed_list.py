#!/usr/bin/env python3
from typing import List, Union

"""This module provides a utility function for summing elements"""


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """ Calculate the sum of all elements in a list of floats and int."""
    result: float = 0
    for i in range(len(mxd_lst)):
        result += mxd_lst[i]
    return (result)
