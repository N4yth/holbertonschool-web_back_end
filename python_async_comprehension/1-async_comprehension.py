#!/usr/bin/env python3
"""
Asynchronous generator that yields random floats between 0 and 10.
"""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    collect 10 random numbers using an async comprehensing
    """
    return [i async for i in async_generator()]
