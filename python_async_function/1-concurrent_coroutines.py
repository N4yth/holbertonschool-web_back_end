#!/usr/bin/env python3
"""
module with 1 function
"""
from typing import List


async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    """
    wait for a random time n time
    """
    wait_random = __import__('0-basic_async_syntax').wait_random
    result: List[float] = []
    for i in range(n):
        result.append(await wait_random(max_delay))
    result = quick_sort(result)
    return (result)


def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0]
        greater = [x for x in arr[1:] if x <= pivot]
        lesser = [x for x in arr[1:] if x > pivot]
        return quick_sort(greater) + [pivot] + quick_sort(lesser)
