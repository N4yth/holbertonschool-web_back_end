#!/usr/bin/env python3
"""
module with 1 function
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    do the moyenne of time to execute the code
    """
    return (asyncio.create_task(wait_random(max_delay)))
