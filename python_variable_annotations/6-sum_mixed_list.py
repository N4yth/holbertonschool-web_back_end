#!/usr/bin/env python3
from typing import List, Union

"""mix list"""


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """sum of all elements of list"""
    result: float = 0
    for i in range(len(mxd_lst)):
        result += mxd_lst[i]
    return (result)
