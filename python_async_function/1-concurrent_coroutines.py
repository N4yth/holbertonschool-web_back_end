#!/usr/bin/env python3
"""
module with 1 function
"""
from typing import List
import asyncio

async def wait_n( n: int, max_delay: int = 10) -> float:
    wait_random = __import__('0-basic_async_syntax').wait_random
    """
    wait for a random time n time
    """
    result : List= []
    for i in range(n):
        result.append(await wait_random(max_delay))
    result.sort()
    return (result)
