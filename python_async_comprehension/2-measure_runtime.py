#!/usr/bin/env python3
"""
Asynchronous generator that yields random floats between 0 and 10.
"""
from typing import List
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    collect 10 random numbers using an async comprehensing
    """
    start = time.time()
    tasks = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*tasks)
    end = time.time()
    return end - start
