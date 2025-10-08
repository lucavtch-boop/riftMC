ServerEvents.recipes(riftMC => 
    {

    riftMC.smelting
        ('1x ae2:silicon', 'minecraft:quartz')
    riftMC.blasting
        ('1x ae2:silicon', 'minecraft:quartz')

    riftMC.shaped
        (Item.of
            ('minecraft:chest', 1),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: 'ars_nouveau:archwood_planks'
        },
        )
    riftMC.shaped
        (Item.of
            ('minecraft:chest', 4),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: 'ars_nouveau:blue_archwood_log'
        },
        )
        riftMC.shaped
        (Item.of
            ('minecraft:chest', 4),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: 'biomesoplenty:jacaranda_log'
        },
        )
        riftMC.shaped
        (Item.of
            ('minecraft:chest', 1),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: 'biomesoplenty:jacaranda_planks'
        },
        )
        riftMC.shaped
        (Item.of
            ('apotheosis:ancient_material', 1),
        [
            'AAA',
            'AA ',
            '   '
        ],
        {
            A: 'apotheosis:mythic_material'
        },
        )

        riftMC.remove
        (
            {output: 'advanced_ae:quantum_helmet'}
        )
        riftMC.remove
        (
            {output: 'advanced_ae:quantum_chestplate'}
        )
        riftMC.remove
        (
            {output: 'advanced_ae:quantum_leggings'}
        )
        riftMC.remove
        (
            {output: 'advanced_ae:quantum_boots'}
        )
        riftMC.remove
        (
            {output: 'ae2:spatial_anchor'}
        )
    }
)