from setuptools import setup, find_packages

setup(
    name='converter',
    version='1.0.0',
    url='https://github.com/Bogdan-101',
    license='',
    author='Anomie',
    author_email='big_bogdan@rambler.ru',
    description='Module for converting to most popular notations (such as JSON, TOML, YAML or Pickle)',
    packages=find_packages('.'),
    entry_points={
        'console_scripts': [
            'converter=Parsers.JSON.main:main',
        ],
    },
)
