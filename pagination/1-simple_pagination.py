#!/usr/bin/env python3

"""
module with a 1 class
"""
import csv
import math
from typing import List, Tuple


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        the function return the first index and last index of the page
        depend on the size of the page
        """
        assert isinstance(page, int)
        assert page > 0
        assert isinstance(page_size, int)
        assert page_size > 0
        result = []
        data_set: List[List] = self.dataset()
        index: Tuple = self.index_range(page, page_size)
        try:
            for i in range(page_size):
                result.append(data_set[index[0] + i])
        except IndexError:
            return []
        return result

    def index_range(self, page: int, page_size: int) -> Tuple:
        """
        the function return the first index and last index of the page
        depend on the size of the page
        """
        result: Tuple = ((page - 1) * page_size, page * page_size)
        return result
