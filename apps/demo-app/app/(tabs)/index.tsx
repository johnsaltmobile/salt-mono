import { memo } from 'react'
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import type {Recipe} from '@/types/recipe.types'; 


type RecipeList = Recipe[]; // move to types 

const 

interface ContainerProps {
  inventoryData: Product[]
}

const InventoryRow = memo(({ item }: { item: Product }) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </View>
  )
})

export default function Container({ inventoryData }: ContainerProps) {
  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <InventoryRow item={item} />
  )

  return (
    <View style={styles.container}>
      <Text style={styles.text}>List</Text>

      {(!inventoryData || inventoryData.length === 0) ? (
        <View style={styles.emptyCenteredView}>
          <Text style={styles.emptyText}>No items available</Text>
        </View>
      ) : (
        <FlatList
          data={inventoryData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          initialNumToRender={15}
          maxToRenderPerBatch={20}
          windowSize={11}
          removeClippedSubviews={true}
          style={styles.listStyle}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333333',
    paddingVertical: 10,
  },
  listStyle: {
    flex: 1,
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  emptyCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#888',
  }
})


// NOTES  
const idCrypto = (): string => crypto.randomUUID(); // Node
const idMath = (): string => Math.random().toString(36).substring(2, 9);
const idDate = (): string => Date.now().toString(36);



// useEffect(() => {
//   const controller = new AbortController()
//   const { signal } = controller

//   const getData = async () => {
//     try {
//       const res = await fetch('https://picsum.photos/v2/list?limit=20', { signal })
//       const json = await res.json()
//     } catch (err: any) {
//       if (err.name !== 'AbortError') {
//         // handle errors
//       }
//     }
//   }
//   getData()

//   return () => controller.abort()
// }, [])


// const filterInventory = (inventoryData: Product[], searchQuery: string) => 
//   useMemo(() => {
//     const filtered = inventoryData.filter((item) =>
//       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     return filtered.map((item) => ({
//       key: item.id, 
//       title: item.name.toUpperCase(), 
//       formattedPrice: `$${item.price.toFixed(2)}`, 
//       isAvailable: item.inStock && item.price > 0 
//     }))
//   }, [inventoryData, searchQuery])
