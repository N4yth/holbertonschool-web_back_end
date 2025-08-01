#!/usr/bin/env python3
"""
module with 1 function
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    wait for a random time
    """
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return (delay)
