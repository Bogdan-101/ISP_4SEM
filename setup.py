from setuptools import setup

setup(
    name='converter',
    version='1.0.0',
    packages=[''],
    url='https://github.com/Bogdan-101',
    license='',
    author='Anomie',
    author_email='big_bogdan@rambler.ru',
    description='Module for converting to most popular notations (such as JSON, TOML, YAML or Pickle)',
    entry_points={
        'console_scripts': [
            'converter=Parsers.JSON.main:main',
        ],
    },
)
