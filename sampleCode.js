otherAttributes: {
  type: DataTypes.VIRTUAL,
  get() {
    const gnpPercent = (this.gnp / 8510700.00) * 100;
    const gnpPerPerson = (this.gnp * 10000000) / this.population;
    return {
      'GNP Percent of USA': `${gnpPercent.toFixed(2)}%`,
      'GNP Per Person': `$${gnpPerPerson.toFixed(2)}`,
    }
  }
}