#!/usr/bin/env python3
"""
Asynchronous generator that yields random floats between 0 and 10.
"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Loop 10 times, each time wait 1 second asynchronously,
    then yield a random float between 0 and 10.
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
