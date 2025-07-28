#!/usr/bin/env python3
"""
module with 1 function
"""
from typing import List
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """
    wait for a random time n time
    """
    result: List[float] = []
    for i in range(n):
        result.append(await task_wait_random(max_delay))
    return (result)
