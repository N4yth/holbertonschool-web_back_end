#!/usr/bin/env python3
"""
module with 1 function
"""
import asyncio
import random


async def async_generator():
    """
    wait for a random time
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
