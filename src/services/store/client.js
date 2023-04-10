import create from 'zustand'

export const clientStore = create((set, get) => ({
  selectedList: [],
  setSelectedList: selectedList => set({ selectedList }),
  onCounter: (type, item) => {
    //CONSULTA NA LISTA DO ZUSTAND, SE O ITEM JÁ EXITE PELO ID
    const newList = get().selectedList
    const index = newList.findIndex(a => a.id === item.id)
    if (type === 'increment') {
      //SE RETORNAR -1, NÃO EXITE NA LISTA
      if (index === -1) {
        //ADICIONA O ITEM PELA PRIMEIRA VEZ NA LISTA
        set({
          selectedList: [
            ...newList,
            { ...item, quantity: 1, totalValue: item.value || 0 },
          ],
        })
        return
      }
      const currentItem = newList[index]
      //QUAL A NOVA QUANTIDADE
      const newQuantity = Number(currentItem.quantity) + 1
      //ADICIONA SE JÁ EXISTIR
      newList[index] = {
        ...currentItem,
        quantity: newQuantity,
        //NOVA QUANTIDADE * VALOR DO ITEM
        totalValue: newQuantity * Number(currentItem.value),
      }
      set({ selectedList: newList })
      return
    }
    const currentItem = newList[index]
    if (currentItem.quantity === 1) {
      // MÉTODO SLICE OU FILTER
      set({ selectedList: newList.slice(index + 1) })
      return
    }
    //REMOVE DA LISTA
    const newQuantity = currentItem.quantity - 1
    newList[index] = {
      ...currentItem,
      quantity: newQuantity,
      totalValue: newQuantity * currentItem.value,
    }
    set({ selectedList: newList })
    return
  },

  address: [],
  setAddress: address => set({ address }),
}))

const addressStore = set => ({
  addresses: [],
  addAddress: address => {
    set(state => ({
      addresses: [address, ...state.addresses],
    }))
  },
})

export const useFormStore = create(set => ({
  CEP: '',
  rua: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  estado: '',
  setAddress: address =>
    set(state => ({
      ...state,
      ...address,
    })),
}))
