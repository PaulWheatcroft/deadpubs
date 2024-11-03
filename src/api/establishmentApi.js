import supabase from '../api/client'

export async function addEstablishment(establishment, flashStore) {
  const response = await supabase
    .from('establishment')
    .insert([establishment])

  if (response.status === 201) {
    flashStore.setFlash('Establishment added successfully!', 'success')
    return { success: true, data: response.data }
  } else {
    flashStore.setFlash('Establishment was not added', 'error')
    console.error("*****", response.error)
    return { success: false, error: response.error }
  }
}

export async function getEstablishment(establishmentId) {
  const { data, error } = await supabase
    .from('establishment')
    .select('*')
    .eq('id', establishmentId)
    .single()

  if (error) {
    console.error('Failed to fetch establishment details:', error)
    return { success: false, error }
  } else {
    console.log(data)
    return { success: true, establishment: data }
  }
}

export async function updateEstablishment(establishment, establishmentId, flashStore) {
  console.log("*****", establishment, establishmentId)
  const { error } = await supabase
    .from('establishment')
    .update(establishment)
    .eq('id', establishmentId)
    .select('*')

  if (error) {
    flashStore.setFlash('Establishment was not updated', 'error')
    console.error("*****", error)
    return { success: false, error }
  } else {
    flashStore.setFlash('Establishment updated successfully!', 'success')
    return { success: true }  
  }
}