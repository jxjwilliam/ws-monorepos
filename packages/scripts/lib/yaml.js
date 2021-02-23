const faker = require('faker')
const fs = require('fs')
const path = require('path')
const dayjs = require('dayjs')
const yaml = require('js-yaml')

const list = Array(10)
  .fill([])
  .map(() =>
    Object.entries({
      name: faker.name.findName(),
      title: faker.name.title(),
      location: faker.address.streetAddress(),
      start_date: dayjs(faker.date.past()).format('YYYY-MM-DD'),
      end_date: dayjs(faker.date.future()).format('YYYY-MM-DD'),
      sentence: faker.lorem.sentence(),
      paragraph: faker.lorem.paragraph(),
      image: faker.image.image(),
      imageUrl: faker.image.imageUrl(),
      avatar: faker.random.image(),
    })
      .map(([key, value]) => `  ${key}: ${value}`)
      .join('\n'),
  )
  .map(item => item.replace(/^\s+/, '- '))
  .join('\n\n')

// move the 'doc.yml' to data/ folder:
// const yamlFile = path.resolve(__dirname, '../../data', 'doc.yml')
const yamlFile = path.resolve(__dirname, 'doc.yml')

try {
  // no need: const ystr = yaml.dump(list)
  fs.writeFileSync(yamlFile, list, { flag: 'w+', encoding: 'utf8' })
} catch (error) {
  throw new Error(error)
}

try {
  const content = fs.readFileSync(yamlFile, { encoding: 'utf8' })
  const data = yaml.load(content)
  console.log(data, '\n\n------\n\n')
  console.log(`[${yamlFile}] has been generated!`)
} catch (err) {
  throw new Error(err)
}
