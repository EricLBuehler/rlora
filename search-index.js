var searchIndex = new Map(JSON.parse('[\
["candle_lora",{"t":"PKKKPKFFFFFFFFFFKGIFPPKFFNNNNMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMNNOONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMNNNNMNNNNMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOMNNNNNNNNNNNNNNMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMNNNNNNNNNNNNNNNNNNMMMNNN","n":["AlreadyMerged","Conv1dLayerLike","Conv2dLayerLike","EmbeddingLayerLike","Left","LinearLayerLike","Lora","LoraConfig","LoraConv1d","LoraConv1dConfig","LoraConv2d","LoraConv2dConfig","LoraEmbedding","LoraEmbeddingConfig","LoraLinear","LoraLinearConfig","Merge","MergeError","MergeErrorOrError","NewLayers","NotMerged","Right","Saveable","SelectedLayers","SelectedLayersBuilder","add_conv1d_layers","add_conv2d_layers","add_embed_layers","add_linear_layers","bias","bias","bias","bias","bias","bias","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","build","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","config","config","config","config","conv1d","conv2d","convert_model","default","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","embed","embeddings","embeddings","eq","equivalent","equivalent","equivalent","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","forward","forward","forward","forward","forward_t","forward_t","forward_t","forward_t","from","from","from","from","from","from","from","from","from","from","from","from","from","from","get_delta_weight","get_delta_weight","get_delta_weight","get_delta_weight","get_delta_weight","get_tensors","get_tensors","get_tensors","get_tensors","get_tensors","hidden_size","hidden_size","init","init","init","init","init","init","init","init","init","init","init","init","init","init","into","into","into","into","into","into","into","into","into","into","into","into","into","into","linear","merge_weights","merge_weights","merge_weights","merge_weights","merge_weights","new","new","new","new","new","new","new","new","new","new","shape","shape","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","unmerge_weights","unmerge_weights","unmerge_weights","unmerge_weights","unmerge_weights","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","weight","weight","weight","weight","weight","weight"],"q":[[0,"candle_lora"],[307,"std::collections::hash::map"],[308,"candle_lora::loraconv1d"],[309,"core::cmp"],[310,"core::hash"],[311,"candle_lora::loraconv2d"],[312,"candle_lora::loraembed"],[313,"candle_lora::loralinear"],[314,"candle_core::tensor"],[315,"core::option"],[316,"candle_nn::conv"],[317,"candle_nn::var_builder"],[318,"core::fmt"],[319,"candle_core::error"],[320,"core::result"],[321,"alloc::string"],[322,"candle_core::shape"],[323,"core::any"]],"i":[30,0,0,0,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,38,0,0,0,1,1,1,1,13,2,9,17,18,19,45,21,1,28,17,5,18,10,22,12,19,14,23,30,45,21,1,28,17,5,18,10,22,12,19,14,23,30,1,17,5,18,10,22,12,19,14,23,17,5,18,10,22,12,19,14,23,2,9,17,18,28,28,45,1,45,21,1,28,17,5,18,10,22,12,19,14,23,30,45,21,1,28,17,5,18,10,22,12,19,14,23,30,45,21,1,28,17,5,18,10,22,12,19,14,23,30,28,11,22,30,30,30,30,17,5,18,10,22,12,19,14,23,30,30,17,18,22,19,17,18,22,19,45,21,1,28,17,5,18,10,22,12,19,14,23,30,37,17,18,22,19,39,17,18,22,19,11,22,45,21,1,28,17,5,18,10,22,12,19,14,23,30,45,21,1,28,17,5,18,10,22,12,19,14,23,30,28,37,17,18,22,19,1,17,5,18,10,22,12,19,14,23,13,19,17,5,18,10,22,12,19,14,23,30,45,21,1,28,17,5,18,10,22,12,19,14,23,30,45,21,1,28,17,5,18,10,22,12,19,14,23,30,45,21,1,28,17,5,18,10,22,12,19,14,23,30,37,17,18,22,19,45,21,1,28,17,5,18,10,22,12,19,14,23,30,13,2,9,17,18,19],"f":"`````````````````````````{{{b{c}}{h{c{f{d}}}}j}{{b{c}}}{lnA`}}{{{b{c}}{h{c{f{Ab}}}}Ad}{{b{c}}}{lnA`}}{{{b{c}}{h{c{f{Af}}}}Ah}{{b{c}}}{lnA`}}{{{b{c}}{h{c{f{Aj}}}}Al}{{b{c}}}{lnA`}}{{{f{Aj}}}{{B`{{f{An}}}}}}{{{f{d}}}{{B`{{f{An}}}}}}{{{f{Ab}}}{{B`{{f{An}}}}}}{{{f{Bb}}}{{B`{{f{An}}}}}}{{{f{Bd}}}{{B`{{f{An}}}}}}{{{f{Bf}}}{{B`{{f{An}}}}}}{{{f{c}}}{{f{e}}}{}{}}0000000000000{{{f{Bhc}}}{{f{Bhe}}}{}{}}0000000000000{{{b{c}}}{{Bj{c}}}{lnA`}}{{{f{Bb}}}Bb}{{{f{j}}}j}{{{f{Bd}}}Bd}{{{f{Ad}}}Ad}{{{f{Bl}}}Bl}{{{f{Ah}}}Ah}{{{f{Bf}}}Bf}{{{f{Al}}}Al}{{{f{Bn}}}Bn}{{{f{c}}{f{Bhe}}}C`{}{}}00000000{{{f{d}}}{{f{Cb}}}}{{{f{Ab}}}{{f{Cd}}}}{{{f{Bb}}}{{f{Cb}}}}{{{f{Bd}}}{{f{Cd}}}}``{{{Bj{c}}Bn{f{Cf}}}{{Ch{c}}}{lnA`}}{{}{{b{c}}}{lnA`}}{Cj{{f{c}}}{}}0000000000000{Cj{{f{Bhc}}}{}}0000000000000{CjC`}0000000000000`{{{f{Af}}}{{f{An}}}}{{{f{Bl}}}{{f{An}}}}{{{f{Cl}}{f{Cl}}}Cn}{{{f{c}}{f{e}}}Cn{}{}}00{{{f{Bb}}{f{BhD`}}}Db}{{{f{j}}{f{BhD`}}}Db}{{{f{Bd}}{f{BhD`}}}Db}{{{f{Ad}}{f{BhD`}}}Db}{{{f{Bl}}{f{BhD`}}}Db}{{{f{Ah}}{f{BhD`}}}Db}{{{f{Bf}}{f{BhD`}}}Db}{{{f{Al}}{f{BhD`}}}Db}{{{f{Bn}}{f{BhD`}}}Db}{{{f{Cl}}{f{BhD`}}}Db}0{{{f{Bb}}{f{An}}}{{Dd{An}}}}{{{f{Bd}}{f{An}}}{{Dd{An}}}}{{{f{Bl}}{f{An}}}{{Dd{An}}}}{{{f{Bf}}{f{An}}}{{Dd{An}}}}{{{f{c}}{f{An}}Cn}{{Dh{AnDf}}}{}}000{cc{}}0000000000000{{{f{Dj}}}{{Dh{AnDl}}}}{{{f{Bb}}}{{Dh{AnDl}}}}{{{f{Bd}}}{{Dh{AnDl}}}}{{{f{Bl}}}{{Dh{AnDl}}}}{{{f{Bf}}}{{Dh{AnDl}}}}{{{f{Dn}}{f{Bh{h{E`An}}}}}C`}{{{f{Bb}}{f{Bh{h{E`An}}}}}C`}{{{f{Bd}}{f{Bh{h{E`An}}}}}C`}{{{f{Bl}}{f{Bh{h{E`An}}}}}C`}{{{f{Bf}}{f{Bh{h{E`An}}}}}C`}{{{f{Af}}}Cj}{{{f{Bl}}}Cj}{{}Cj}0000000000000{ce{}{}}0000000000000`{{{f{BhDj}}}{{Dh{C`Dl}}}}{{{f{BhBb}}}{{Dh{C`Dl}}}}{{{f{BhBd}}}{{Dh{C`Dl}}}}{{{f{BhBl}}}{{Dh{C`Dl}}}}{{{f{BhBf}}}{{Dh{C`Dl}}}}{{}{{b{c}}}{lnA`}}{{{f{d}}{f{j}}{f{Bn}}{f{Cf}}Cj}{{Dd{Bb}}}}{{CjCjCj}j}{{{f{Ab}}{f{Ad}}{f{Bn}}{f{Cf}}Cj}{{Dd{Bd}}}}{{CjCj}Ad}{{{f{Af}}{f{Ah}}{f{Bn}}{f{Cf}}Cj}{{Dd{Bl}}}}{{CjCj}Ah}{{{f{Aj}}{f{Al}}{f{Bn}}{f{Cf}}Cj}{{Dd{Bf}}}}{{CjCj}Al}{{CjEb{B`{Ed}}}Bn}{{{f{Aj}}}{{f{Ef}}}}{{{f{Bf}}}{{f{Ef}}}}{{{f{c}}}e{}{}}00000000{{{f{c}}}E`{}}{c{{Dh{e}}}{}{}}000000000000000000000000000{{{f{c}}}Eh{}}0000000000000{{{f{BhDj}}}{{Dh{C`Dl}}}}{{{f{BhBb}}}{{Dh{C`Dl}}}}{{{f{BhBd}}}{{Dh{C`Dl}}}}{{{f{BhBl}}}{{Dh{C`Dl}}}}{{{f{BhBf}}}{{Dh{C`Dl}}}}{ce{}{}}0000000000000{{{f{Aj}}}{{f{An}}}}{{{f{d}}}{{f{An}}}}{{{f{Ab}}}{{f{An}}}}{{{f{Bb}}}{{f{An}}}}{{{f{Bd}}}{{f{An}}}}{{{f{Bf}}}{{f{An}}}}","D":"Eh","p":[[5,"SelectedLayersBuilder",0],[10,"Conv1dLayerLike",0],[1,"reference"],[5,"HashMap",307],[5,"LoraConv1dConfig",0,308],[10,"Eq",309],[10,"PartialEq",309],[10,"Hash",310],[10,"Conv2dLayerLike",0],[5,"LoraConv2dConfig",0,311],[10,"EmbeddingLayerLike",0],[5,"LoraEmbeddingConfig",0,312],[10,"LinearLayerLike",0],[5,"LoraLinearConfig",0,313],[5,"Tensor",314],[6,"Option",315],[5,"LoraConv1d",0,308],[5,"LoraConv2d",0,311],[5,"LoraLinear",0,313],[0,"mut"],[5,"SelectedLayers",0],[5,"LoraEmbedding",0,312],[5,"LoraConfig",0],[1,"unit"],[5,"Conv1dConfig",316],[5,"Conv2dConfig",316],[8,"VarBuilder",317],[5,"NewLayers",0],[1,"usize"],[6,"MergeError",0],[1,"bool"],[5,"Formatter",318],[8,"Result",318],[8,"Result",319],[6,"Error",319],[6,"Result",320],[10,"Merge",0],[8,"MergeErrorOrError",0],[10,"Saveable",0],[5,"String",321],[1,"f64"],[1,"f32"],[5,"Shape",322],[5,"TypeId",323],[5,"Lora",0]],"r":[[8,308],[9,308],[10,311],[11,311],[12,312],[13,312],[14,313],[15,313]],"b":[[148,"impl-Display-for-MergeError"],[149,"impl-Debug-for-MergeError"]],"c":"OjAAAAAAAAA=","e":"OzAAAAEAAAcBDgAAAAEABwACAAsAAAANAAAADwAAABEAAgAVAAAAFwBBAFoARACuABgA1QAAANcADADlADUAHAEXAA=="}],\
["candle_lora_macro",{"t":"YX","n":["AutoLoraConvert","replace_layer_fields"],"q":[[0,"candle_lora_macro"]],"i":[0,0],"f":"``","D":"`","p":[],"r":[],"b":[],"c":"OjAAAAAAAAA=","e":"OjAAAAEAAAAAAAIAEAAAAAAAAQACAA=="}],\
["candle_lora_transformers",{"t":"CCCCCCCCCCCCCCCFFFSFNNNNNNNNNNNNNNNNNNNNONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNFFNNNNNNNNNNNNNNNONNNNONOOOOONNNNNNNNNNOONNFFFFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOONOONNNNONNNNONOOOOOONNNNNNNNNNNNNNNONNNNNFFFNNNNNNNNNNNNNNNNNNONNNNNNNNNOONNNONNNOOONNOOONNNNNNNNNNNONNNFNNNNNNNNNNNNNNNHNFFOOONNNNONNNNNNNNONNNNNNNNNOONNONNONOOOOOONNNNNNONONNFFFFFSNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOONNNNNOONNNNNNNNOOOOOOOOOONNNNNNNNNNNNNNNNNOOOONNNNNNFFNNNNNNNNNNNNNNNNNNNNNNOONNONNONOOOOOONNNNNNNOONNFFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNHHHHHHHHHHFFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNFFFNNNNNNNNNNNNNNNNNNNNNNNNNONNNNNNNNNNNNNNNNNNONNNNNNNNNNONNNFNNNNNNNNNNNHNNNNNNNNHHHFFFFNNNNNNNNNNNNHNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNHHNNNNNNNNNNNNNNNNNNNN","n":["bert","bigcode","blip","blip_text","dinov2","falcon","llama","mistral","mpt","resnet","stable_lm","t5","unsync_func","varbuilder_utils","with_tracing","BertLinear","BertModel","Config","DTYPE","LayerNorm","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","default","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deserialize","device","drop","drop","drop","drop","eq","fmt","fmt","fmt","forward","forward","forward","from","from","from","from","get_lora_model","get_merged_lora_model","get_tensors","init","init","init","init","into","into","into","into","load","new","new","to_owned","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","Config","GPTBigCode","borrow","borrow","borrow_mut","borrow_mut","config","deref","deref","deref_mut","deref_mut","drop","drop","fmt","forward","from","from","hidden_size","init","init","into","into","layer_norm_epsilon","load","max_position_embeddings","multi_query","n_inner","num_attention_heads","num_hidden_layers","starcoder","starcoder_1b","starcoder_3b","starcoder_7b","try_from","try_from","try_into","try_into","type_id","type_id","use_cache","vocab_size","vzip","vzip","BlipForConditionalGeneration","Config","VisionConfig","VisionModel","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","drop","drop","drop","drop","fmt","fmt","fmt","fmt","forward","forward_t","from","from","from","from","hidden_act","hidden_size","image_captioning_large","image_size","image_text_hidden_size","init","init","init","init","intermediate_size","into","into","into","into","layer_norm_eps","new","num_attention_heads","num_hidden_layers","patch_size","projection_dim","projection_dim","text_config","text_decoder","to_owned","to_owned","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","vision_config","vision_model","vzip","vzip","vzip","vzip","Config","TextLMHeadModel","TextPooler","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","deref","deref","deref","deref_mut","deref_mut","deref_mut","deserialize","drop","drop","drop","encoder_hidden_size","fmt","fmt","fmt","forward","forward","forward_t","from","from","from","hidden_act","hidden_size","init","init","init","intermediate_size","into","into","into","is_decoder","layer_norm_eps","max_position_embeddings","new","new","num_attention_heads","num_hidden_layers","projection_dim","reset_kv_cache","to_owned","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","vocab_size","vzip","vzip","vzip","DinoVisionTransformer","borrow","borrow_mut","deref","deref_mut","drop","fmt","forward","forward_t","from","init","into","new","try_from","try_into","type_id","vit_small","vzip","Config","Falcon","alibi","attention_dropout","bias","borrow","borrow","borrow_mut","borrow_mut","bos_token_id","config","default","deref","deref","deref_mut","deref_mut","drop","drop","eos_token_id","falcon7b","fmt","fmt","forward","from","from","get_lora_model","get_merged_lora_model","get_tensors","hidden_dropout","hidden_size","init","init","initializer_range","into","into","layer_norm_epsilon","load","multi_query","n_head_kv","new_decoder_architecture","num_attention_heads","num_hidden_layers","parallel_attn","try_from","try_from","try_into","try_into","type_id","type_id","use_cache","validate","vocab_size","vzip","vzip","Cache","Config","Llama","LlamaConfig","LlamaLinear","MAX_SEQ_LEN","bias","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","config_7b_v1","config_7b_v2","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deserialize","drop","drop","drop","drop","drop","fmt","forward","forward","forward_t","from","from","from","from","from","get_lora_model","get_lora_model","get_merged_lora_model","get_merged_lora_model","get_tensors","get_tensors","get_tensors","hidden_size","hidden_size","init","init","init","init","init","intermediate_size","intermediate_size","into","into","into","into","into","into_config","load","new","num_attention_heads","num_attention_heads","num_hidden_layers","num_hidden_layers","num_key_value_heads","num_key_value_heads","rms_norm_eps","rms_norm_eps","rope_theta","rope_theta","shape","to_owned","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","use_flash_attn","use_kv_cache","vocab_size","vocab_size","vzip","vzip","vzip","vzip","vzip","weight","Config","Mistral","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","config_7b_v0_1","deref","deref","deref_mut","deref_mut","drop","drop","eq","fmt","fmt","forward","from","from","get_lora_model","get_merged_lora_model","get_tensors","hidden_act","hidden_size","init","init","intermediate_size","into","into","max_position_embeddings","new","num_attention_heads","num_hidden_layers","num_key_value_heads","rms_norm_eps","rope_theta","sliding_window","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","use_flash_attn","vocab_size","vzip","vzip","Config","Model","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","deref","deref","deref_mut","deref_mut","drop","drop","eq","fmt","fmt","forward","from","from","init","init","into","into","is_causal","new","replit_code_v1_5_3b","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip","resnet101","resnet101_no_final_layer","resnet152","resnet152_no_final_layer","resnet18","resnet18_no_final_layer","resnet34","resnet34_no_final_layer","resnet50","resnet50_no_final_layer","Config","Model","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","deref","deref","deref_mut","deref_mut","drop","drop","eq","fmt","fmt","forward","from","from","head_dim","init","init","into","into","new","num_kv_groups","rotary_ndims","stablelm_3b_4e1t","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip","Config","T5EncoderModel","T5ForConditionalGeneration","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clear_kv_cache","clear_kv_cache","clone","clone_into","decode","default","deref","deref","deref","deref_mut","deref_mut","deref_mut","deserialize","device","device","drop","drop","drop","encode","eos_token_id","eq","fmt","fmt","fmt","forward","forward","from","from","from","init","init","init","into","into","into","load","load","musicgen_small","pad_token_id","to_owned","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","use_cache","vzip","vzip","vzip","UnsyncFunc","borrow","borrow_mut","clone","clone_into","deref","deref_mut","drop","fmt","forward","forward_t","from","func","init","into","new","to_owned","try_from","try_into","type_id","vzip","from_mmaped_safetensors","from_npz_tensors","from_pth_tensors","QMatMul","TracedLoraConv2d","TracedLoraEmbedding","TracedLoraLinear","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","conv2d","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","drop","drop","drop","drop","embeddings","fmt","fmt","fmt","fmt","forward","forward","forward","forward","forward_t","forward_t","forward_t","forward_t","from","from","from","from","from_weights","get_lora_model","get_lora_model","get_merged_lora_model","get_merged_lora_model","get_tensors","get_tensors","init","init","init","init","into","into","into","into","linear","linear_no_bias","new","new","to_owned","to_owned","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip"],"q":[[0,"candle_lora_transformers"],[15,"candle_lora_transformers::bert"],[87,"candle_lora_transformers::bigcode"],[130,"candle_lora_transformers::blip"],[211,"candle_lora_transformers::blip_text"],[274,"candle_lora_transformers::dinov2"],[292,"candle_lora_transformers::falcon"],[346,"candle_lora_transformers::llama"],[453,"candle_lora_transformers::mistral"],[503,"candle_lora_transformers::mpt"],[539,"candle_lora_transformers::resnet"],[549,"candle_lora_transformers::stable_lm"],[587,"candle_lora_transformers::t5"],[649,"candle_lora_transformers::unsync_func"],[670,"candle_lora_transformers::varbuilder_utils"],[673,"candle_lora_transformers::with_tracing"],[756,"core::result"],[757,"serde::de"],[758,"core::fmt"],[759,"candle_core::tensor"],[760,"candle_core::error"],[761,"candle_lora"],[762,"candle_nn::var_builder"],[763,"candle_lora::loralinear"],[764,"core::option"],[765,"candle_lora::loraconv1d"],[766,"candle_lora::loraconv2d"],[767,"candle_lora::loraembed"],[768,"alloc::string"],[769,"std::collections::hash::map"],[770,"core::any"],[771,"candle_core::dtype"],[772,"candle_core::device"],[773,"candle_core::shape"],[774,"core::ops::function"],[775,"alloc::boxed"],[776,"std::path"],[777,"core::convert"],[778,"candle_nn::conv"],[779,"candle_transformers::quantized_var_builder"]],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,9,12,3,13,9,12,3,3,3,3,13,9,12,3,13,9,12,3,3,13,13,9,12,3,3,9,12,3,13,9,12,13,9,12,3,9,9,9,13,9,12,3,13,9,12,3,13,9,12,3,13,9,12,3,13,9,12,3,13,9,12,3,13,9,12,3,0,0,27,28,27,28,27,27,28,27,28,27,28,28,27,27,28,28,27,28,27,28,28,27,28,28,28,28,28,28,28,28,28,27,28,27,28,27,28,28,28,27,28,0,0,0,0,29,30,31,32,29,30,31,32,29,30,29,30,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,31,31,29,30,31,32,29,29,30,29,30,29,30,31,32,29,29,30,31,32,29,32,29,29,29,29,30,30,32,29,30,29,30,31,32,29,30,31,32,29,30,31,32,30,32,29,30,31,32,0,0,0,35,36,34,35,36,34,35,35,35,36,34,35,36,34,35,35,36,34,35,35,36,34,36,34,36,35,36,34,35,35,35,36,34,35,35,36,34,35,35,35,36,34,35,35,35,34,35,35,36,34,35,36,34,35,36,34,35,35,36,34,0,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,0,37,0,0,39,39,39,39,38,39,38,39,38,39,39,38,39,38,39,38,39,39,39,38,38,39,38,38,38,38,39,39,39,38,39,39,38,39,38,39,39,39,39,39,39,39,38,39,38,39,38,39,39,39,39,38,0,0,0,0,0,0,40,42,43,40,41,44,42,43,40,41,44,41,41,42,42,42,43,40,41,44,42,43,40,41,44,43,42,43,40,41,44,40,40,44,40,42,43,40,41,44,40,44,40,44,40,40,44,42,43,42,43,40,41,44,42,43,42,43,40,41,44,43,44,41,42,43,42,43,42,43,42,43,42,43,40,41,42,43,40,41,44,42,43,40,41,44,42,43,40,41,44,42,41,42,43,42,43,40,41,44,40,0,0,48,49,48,49,48,48,48,48,49,48,49,48,49,48,48,49,49,48,49,49,49,49,48,48,48,49,48,48,49,48,49,48,48,48,48,48,48,48,48,49,48,49,48,49,48,48,48,49,0,0,50,51,50,51,50,50,50,51,50,51,50,51,50,50,51,51,50,51,50,51,50,51,50,51,50,50,50,51,50,51,50,51,50,51,0,0,0,0,0,0,0,0,0,0,0,0,53,54,53,54,53,53,53,54,53,54,53,54,53,53,54,54,53,54,53,53,54,53,54,54,53,53,53,53,53,54,53,54,53,54,53,54,0,0,0,57,55,56,57,55,56,55,56,57,57,56,57,57,55,56,57,55,56,57,55,56,57,55,56,56,57,57,57,55,56,55,56,57,55,56,57,55,56,57,55,56,55,56,57,57,57,57,55,56,57,55,56,57,55,56,57,57,55,56,0,52,52,52,52,52,52,52,52,52,52,52,0,52,52,52,52,52,52,52,52,0,0,0,0,0,0,0,69,70,66,67,69,70,66,67,66,67,66,67,0,69,70,66,67,69,70,66,67,69,70,66,67,69,69,70,66,67,69,70,66,67,69,70,66,67,69,70,66,67,70,69,70,69,70,69,70,69,70,66,67,69,70,66,67,0,0,69,67,66,67,69,70,66,67,69,70,66,67,69,70,66,67,69,70,66,67],"f":"````````````````````{{{b{c}}}{{b{e}}}{}{}}000{{{b{dc}}}{{b{de}}}{}{}}000{{{b{f}}}f}{{{b{c}}{b{de}}}h{}{}}{{}f}{j{{b{c}}}{}}000{j{{b{dc}}}{}}000{c{{l{f}}}n}`{jh}000{{{b{f}}{b{f}}}A`}{{{b{Ab}}{b{dAd}}}Af}{{{b{Ah}}{b{dAd}}}Af}{{{b{f}}{b{dAd}}}Af}{{{b{Aj}}{b{Al}}{b{Al}}}{{An{Al}}}}{{{b{Ab}}{b{Al}}}{{An{Al}}}}{{{b{Ah}}{b{Al}}}{{An{Al}}}}{cc{}}000{{{b{dAb}}B`{b{Bb}}{Bf{Bd}}{Bf{Bh}}{Bf{Bj}}{Bf{Bl}}}h}0{{{b{Ab}}}{{C`{BnAl}}}}{{}j}000{ce{}{}}000{{Bb{b{f}}A`B`}{{An{Aj}}}}{{BbAl{Bf{Al}}A`B`}Ab}{{AlAlCb}Ah}{{{b{c}}}e{}{}}{c{{l{e}}}{}{}}0000000{{{b{c}}}Cd{}}0006666``{{{b{c}}}{{b{e}}}{}{}}0{{{b{dc}}}{{b{de}}}{}{}}0{{{b{Cf}}}{{b{Ch}}}}{j{{b{c}}}{}}0{j{{b{dc}}}{}}0{jh}0{{{b{Ch}}{b{dAd}}}Af}{{{b{dCf}}{b{Al}}j}{{An{Al}}}}{cc{}}0`{{}j}0{ce{}{}}0`{{BbChA`B`}{{An{Cf}}}}`````{{}Ch}000>>>>==``22````<<<<;;;;{{{b{Cj}}}Cj}{{{b{Cl}}}Cl}{{{b{c}}{b{de}}}h{}{}}0<<<<;;;;::::{{{b{Cj}}{b{dAd}}}Af}{{{b{Cl}}{b{dAd}}}Af}{{{b{Cn}}{b{dAd}}}Af}{{{b{D`}}{b{dAd}}}Af}{{{b{Cn}}{b{Al}}}{{An{Al}}}}{{{b{c}}{b{Al}}A`}{{l{AlDb}}}{}}====``{{}Cl}``====`<<<<`{{{b{Cl}}BbA`B`}{{An{D`}}}}``````{{{b{dD`}}}{{b{dDd}}}}{{{b{c}}}e{}{}}0{c{{l{e}}}{}{}}0000000{{{b{c}}}Cd{}}000`{{{b{D`}}}{{b{Cn}}}}{ce{}{}}000```{{{b{c}}}{{b{e}}}{}{}}00{{{b{dc}}}{{b{de}}}{}{}}00{{{b{Df}}}Df}{{{b{c}}{b{de}}}h{}{}}{j{{b{c}}}{}}00{j{{b{dc}}}{}}00{c{{l{Df}}}n}{jh}00`{{{b{Df}}{b{dAd}}}Af}{{{b{Dh}}{b{dAd}}}Af}{{{b{Dd}}{b{dAd}}}Af}{{{b{Dh}}{b{Al}}}{{An{Al}}}}{{{b{dDd}}{b{Al}}{b{Al}}}{{An{Al}}}}{{{b{c}}{b{Al}}A`}{{l{AlDb}}}{}}{cc{}}00``{{}j}00`{ce{}{}}00```{{{b{Df}}BbA`B`}{{An{Dh}}}}{{{b{Df}}BbA`B`}{{An{Dd}}}}```{{{b{dDd}}}h}{{{b{c}}}e{}{}}{c{{l{e}}}{}{}}00000{{{b{c}}}Cd{}}00`666`{{{b{c}}}{{b{e}}}{}{}}{{{b{dc}}}{{b{de}}}{}{}}{j{{b{c}}}{}}{j{{b{dc}}}{}}{jh}{{{b{Dj}}{b{dAd}}}Af}{{{b{Dj}}{b{Al}}}{{An{Al}}}}{{{b{c}}{b{Al}}A`}{{l{AlDb}}}{}}{cc{}}{{}j}{ce{}{}}{{BbjjjA`B`}{{An{Dj}}}}==<{{BbA`B`}{{An{Dj}}}}2`````<<;;`{{{b{Dl}}}{{b{Dn}}}}{{}Dn}<<;;::`0{{{b{Dn}}{b{dAd}}}Af}{{{b{Dl}}{b{dAd}}}Af}{{{b{dDl}}{b{Al}}}{{An{Al}}}}99{{{b{dDl}}B`{b{Bb}}{Bf{Bd}}{Bf{Bh}}{Bf{Bj}}{Bf{Bl}}}h}0{{{b{Dl}}}{{C`{BnAl}}}}``::`99`{{BbDnA`B`BdBl}{{An{Dl}}}}``````{c{{l{e}}}{}{}}000{{{b{c}}}Cd{}}0`{{{b{Dn}}}{{An{h}}}}`==``````{{{b{E`}}}{{Bf{{b{Al}}}}}}{{{b{c}}}{{b{e}}}{}{}}0000{{{b{dc}}}{{b{de}}}{}{}}0000{{{b{Eb}}}Eb}{{{b{c}}{b{de}}}h{}{}}{A`Ed}0{j{{b{c}}}{}}0000{j{{b{dc}}}{}}0000{c{{l{Ef}}}n}{jh}0000{{{b{E`}}{b{dAd}}}Af}{{{b{E`}}{b{Al}}}{{An{Al}}}}{{{b{Eh}}{b{Al}}j}{{An{Al}}}}{{{b{c}}{b{Al}}A`}{{l{AlDb}}}{}}{cc{}}0000{{{b{dE`}}B`{b{Bb}}{Bf{Bd}}{Bf{Bh}}{Bf{Bj}}{Bf{Bl}}}h}{{{b{dEh}}B`{b{Bb}}{Bf{Bd}}{Bf{Bh}}{Bf{Bj}}{Bf{Bl}}}h}10{{{b{E`}}{b{d{C`{BnAl}}}}}h}{{{b{E`}}}{{C`{BnAl}}}}{{{b{Eh}}}{{C`{BnAl}}}}``{{}j}0000``{ce{}{}}0000{{EfA`}Ed}{{Bb{b{Eb}}{b{Ed}}A`B`BdBl}{{An{Eh}}}}{{A`Ej{b{Ed}}{b{El}}}{{An{Eb}}}}``````````{{{b{E`}}}{{b{En}}}}{{{b{c}}}e{}{}}{c{{l{e}}}{}{}}000000000{{{b{c}}}Cd{}}0000````77777{{{b{E`}}}{{b{Al}}}}``{{{b{c}}}{{b{e}}}{}{}}0{{{b{dc}}}{{b{de}}}{}{}}0{{{b{F`}}}F`}{{{b{c}}{b{de}}}h{}{}}{A`F`}{j{{b{c}}}{}}0{j{{b{dc}}}{}}0{jh}0{{{b{F`}}{b{F`}}}A`}{{{b{F`}}{b{dAd}}}Af}{{{b{Fb}}{b{dAd}}}Af}{{{b{dFb}}{b{Al}}j}{{An{Al}}}}{cc{}}0{{{b{dFb}}B`{b{Bb}}{Bf{Bd}}{Bf{Bh}}{Bf{Bj}}{Bf{Bl}}}h}0{{{b{Fb}}}{{C`{BnAl}}}}``{{}j}0`{ce{}{}}0`{{{b{F`}}BbA`B`}{{An{Fb}}}}``````{{{b{c}}}e{}{}}{c{{l{e}}}{}{}}000{{{b{c}}}Cd{}}0``44``{{{b{c}}}{{b{e}}}{}{}}0{{{b{dc}}}{{b{de}}}{}{}}0{{{b{Fd}}}Fd}{{{b{c}}{b{de}}}h{}{}}{j{{b{c}}}{}}0{j{{b{dc}}}{}}0{jh}0{{{b{Fd}}{b{Fd}}}A`}{{{b{Fd}}{b{dAd}}}Af}{{{b{Ff}}{b{dAd}}}Af}{{{b{dFf}}{b{Al}}}{{An{Al}}}}{cc{}}0{{}j}0{ce{}{}}0{{{b{Fd}}}A`}{{{b{Fd}}BbA`B`}{{An{Ff}}}}{{}Fd}{{{b{c}}}e{}{}}{c{{l{e}}}{}{}}000{{{b{c}}}Cd{}}066{{jBbA`B`}{{An{Fh}}}}{{BbA`B`}{{An{Fh}}}}10101010``{{{b{c}}}{{b{e}}}{}{}}0{{{b{dc}}}{{b{de}}}{}{}}0{{{b{Fj}}}Fj}{{{b{c}}{b{de}}}h{}{}}{j{{b{c}}}{}}0{j{{b{dc}}}{}}0{jh}0{{{b{Fj}}{b{Fj}}}A`}{{{b{Fj}}{b{dAd}}}Af}{{{b{Fl}}{b{dAd}}}Af}{{{b{dFl}}{b{Al}}j}{{An{Al}}}}{cc{}}0{{{b{Fj}}}j}{{}j}0{ce{}{}}0{{{b{Fj}}BbA`B`}{{An{Fl}}}}33{A`Fj}{{{b{c}}}e{}{}}{c{{l{e}}}{}{}}000{{{b{c}}}Cd{}}055```{{{b{c}}}{{b{e}}}{}{}}00{{{b{dc}}}{{b{de}}}{}{}}00{{{b{dFn}}}h}{{{b{dG`}}}h}{{{b{Gb}}}Gb}{{{b{c}}{b{de}}}h{}{}}{{{b{dG`}}{b{Al}}{b{Al}}}{{An{Al}}}}{{}Gb}{j{{b{c}}}{}}00{j{{b{dc}}}{}}00{c{{l{Gb}}}n}{{{b{Fn}}}{{b{El}}}}{{{b{G`}}}{{b{El}}}}{jh}00{{{b{dG`}}{b{Al}}}{{An{Al}}}}`{{{b{Gb}}{b{Gb}}}A`}{{{b{Gb}}{b{dAd}}}Af}{{{b{Fn}}{b{dAd}}}Af}{{{b{G`}}{b{dAd}}}Af}{{{b{dFn}}{b{Al}}}{{An{Al}}}}={cc{}}00{{}j}00{ce{}{}}00{{Bb{b{Gb}}A`B`}{{An{Fn}}}}{{Bb{b{Gb}}A`B`}{{An{G`}}}}{{}Gb}`{{{b{c}}}e{}{}}{c{{l{e}}}{}{}}00000{{{b{c}}}Cd{}}00`666`{{{b{c}}}{{b{e}}}{}{}}{{{b{dc}}}{{b{de}}}{}{}}{{{b{Fh}}}Fh}{{{b{c}}{b{de}}}h{}{}}{j{{b{c}}}{}}{j{{b{dc}}}{}}{jh}{{{b{Fh}}{b{dAd}}}Af}{{{b{Fh}}{b{Al}}}{{An{Al}}}}{{{b{c}}{b{Al}}A`}{{l{AlDb}}}{}}{cc{}}{cFh{{Gf{{b{Al}}}{{Gd{{An{Al}}}}}}}}{{}j}{ce{}{}}2{{{b{c}}}e{}{}}{c{{l{e}}}{}{}}0{{{b{c}}}Cd{}}3{{{b{{Gh{c}}}}Ej{b{El}}A`}{{l{{Gn{{Gl{Gj}}}}Db}}}{{Hb{H`}}}}{{cEj{b{El}}A`}{{l{{Gn{{Gl{Gj}}}}Db}}}{{Hb{H`}}}}0````{{{b{c}}}{{b{e}}}{}{}}000{{{b{dc}}}{{b{de}}}{}{}}000{{{b{Hd}}}Hd}{{{b{Hf}}}Hf}{{{b{c}}{b{de}}}h{}{}}0{{jjjHhBb}{{An{Hd}}}}{j{{b{c}}}{}}000{j{{b{dc}}}{}}000{jh}000{{{b{Hj}}}{{b{Al}}}}{{{b{Hj}}{b{dAd}}}Af}{{{b{Hl}}{b{dAd}}}Af}{{{b{Hd}}{b{dAd}}}Af}{{{b{Hf}}{b{dAd}}}Af}{{{b{Hj}}{b{Al}}}{{An{Al}}}}{{{b{Hl}}{b{Al}}}{{An{Al}}}}{{{b{Hd}}{b{Al}}}{{An{Al}}}}{{{b{Hf}}{b{Al}}}{{An{Al}}}}{{{b{c}}{b{Al}}A`}{{l{AlDb}}}{}}000{cc{}}000{{Al{Bf{Al}}BbA`B`}Hl}{{{b{dHj}}B`{b{Bb}}{Bf{Bd}}{Bf{Bh}}{Bf{Bj}}{Bf{Bl}}}h}{{{b{dHl}}B`{b{Bb}}{Bf{Bd}}{Bf{Bh}}{Bf{Bj}}{Bf{Bl}}}h}10{{{b{Hj}}}{{C`{BnAl}}}}{{{b{Hl}}}{{C`{BnAl}}}}{{}j}000{ce{}{}}000{{jjBbA`B`}{{An{Hl}}}}0{{jjBbA`B`}{{An{Hj}}}}{{jjHn}{{An{Hf}}}}{{{b{c}}}e{}{}}0{c{{l{e}}}{}{}}0000000{{{b{c}}}Cd{}}0006666","D":"Mf","p":[[1,"reference"],[0,"mut"],[5,"Config",15],[1,"unit"],[1,"usize"],[6,"Result",756],[10,"Deserializer",757],[1,"bool"],[5,"BertLinear",15],[5,"Formatter",758],[8,"Result",758],[5,"LayerNorm",15],[5,"BertModel",15],[5,"Tensor",759],[8,"Result",760],[5,"LoraConfig",761],[8,"VarBuilder",762],[5,"LoraLinearConfig",763],[6,"Option",764],[5,"LoraConv1dConfig",765],[5,"LoraConv2dConfig",766],[5,"LoraEmbeddingConfig",767],[5,"String",768],[5,"HashMap",769],[1,"f64"],[5,"TypeId",770],[5,"GPTBigCode",87],[5,"Config",87],[5,"VisionConfig",130],[5,"Config",130],[5,"VisionModel",130],[5,"BlipForConditionalGeneration",130],[6,"Error",760],[5,"TextLMHeadModel",211],[5,"Config",211],[5,"TextPooler",211],[5,"DinoVisionTransformer",274],[5,"Falcon",292],[5,"Config",292],[5,"LlamaLinear",346],[5,"Cache",346],[5,"Config",346],[5,"LlamaConfig",346],[5,"Llama",346],[6,"DType",771],[6,"Device",772],[5,"Shape",773],[5,"Config",453],[5,"Mistral",453],[5,"Config",503],[5,"Model",503],[5,"UnsyncFunc",649],[5,"Config",549],[5,"Model",549],[5,"T5EncoderModel",587],[5,"T5ForConditionalGeneration",587],[5,"Config",587],[17,"Output"],[10,"Fn",774],[1,"slice"],[10,"SimpleBackend",762],[5,"Box",775],[5,"VarBuilderArgs",762],[5,"Path",776],[10,"AsRef",777],[5,"TracedLoraConv2d",673],[5,"QMatMul",673],[5,"Conv2dConfig",778],[5,"TracedLoraEmbedding",673],[5,"TracedLoraLinear",673],[5,"VarBuilder",779]],"r":[],"b":[[396,"impl-Saveable-for-LlamaLinear"],[397,"impl-LlamaLinear"]],"c":"OjAAAAAAAAA=","e":"OzAAAAEAAIkCJQAAAAAABAAAABAAJAA7AAQARAAiAGkAAgBuADYAqQAJALcAOADzAAUA/AAfAB0BAAAfARwAQAEFAEgBAABKATkAjQELAJ4BAACgATgA3QEFAOUBAADnASIADAIBABACDwAhAgAAIwIUADoCAgA/Ai8AcgICAHgCEQCLAgkAlgIBAJkCBQCiAikA0AIAANUCBQDfAhUA"}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);
