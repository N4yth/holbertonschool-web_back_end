#!/usr/bin/env python3
"""
module with 1 function
"""
from typing import List
import asyncio


async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    """
    wait for a random time n time
    """
    wait_random = __import__('0-basic_async_syntax').wait_random
    tasks = [wait_random(max_delay) for i in range(n)]
    result: List[float] = []
    for completed_task in asyncio.as_completed(tasks):
        delay = await completed_task
        result.append(delay)
    return (result)
