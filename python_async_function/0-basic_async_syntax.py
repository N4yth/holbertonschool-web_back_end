"""
module with 1 function
"""
from time import sleep
import random


async def wait_random(max_delay=10) -> float:
    """
    wait for a random time
    """
    delay = random.uniform(0, max_delay)
    sleep(delay)
    return (delay)
